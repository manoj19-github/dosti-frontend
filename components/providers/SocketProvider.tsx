"use client";
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import IO from "socket.io-client";

type SocketContextType = {
  socket: any | null;
  isConnected: boolean;
};

const socketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(socketContext);
};

interface SocketProviderProps {
  children: ReactNode;
}

const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<any>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  useEffect(() => {
    const socketInstance = IO(process.env.NEXT_PUBLIC_SERVER_URL!);
    socketInstance.on("connect", () => {
      setIsConnected(true);
    });
    socketInstance.on("disconnect", () => {
      setIsConnected(false);
    });

    setSocket(socketInstance);
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <socketContext.Provider value={{ socket, isConnected }}>
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;

"use client";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { setAuthStatus, setUser } from "@/redux/authSlice";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import React, { useEffect } from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const {} = useQuery(["me"], {
    queryFn: async () => {
      try {
        const { data } = await axios.get("/api/users/me");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: (data) => {
      dispatch(setUser(data));
      dispatch(setAuthStatus(true));
    },
  });

  return <>{children}</>;
};

export default HomeLayout;

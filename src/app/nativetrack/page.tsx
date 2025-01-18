'use client'
import { useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    const targetPath = '/nativetrack.html';
    router.push(targetPath);
  }, [router]);

  return (<Box></Box>); 
};

export default RedirectPage;
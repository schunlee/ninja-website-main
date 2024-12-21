"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Collapse,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  useDisclosure,
  Icon,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import DownloadButton from "./DownloadButton";
import Slogan from "./Slogan";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

interface DesktopNavProps {
  activeNav: string;
  setActiveNav: (value: string) => void;
}

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const path = usePathname(); // 获取 router
  const [activeNav, setActiveNav] = useState<string>(() => {
    // 初始化时根据当前路径设置 activeNav
    const currentNav = NAV_ITEMS.find((navItem) => navItem.href === path);
    return currentNav ? currentNav.label : ""; // 如果找不到匹配项，使用默认
  });

  const [header, setHeader] = useState(false);

  // 当路由路径变化时更新 activeNav
  useEffect(() => {
    const currentNav = NAV_ITEMS.find((navItem) => navItem.href === path);
    if (currentNav) {
      setActiveNav(currentNav.label);
    }
  }, [path]); // 当路由路径变化时触

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  });

  return (
    <Box>
      <Flex
        className={header ? "fixed w-full bg-opacity-20 z-50" : "bg-[black]"}
        bg={useColorModeValue("black", "gray.800")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "center" }}
          align="center"
        >
          <Logo />
          <Flex display={{ base: "none", md: "flex" }} ml={10} justify="center">
            <DesktopNav activeNav={activeNav} setActiveNav={setActiveNav} />
          </Flex>
        </Flex>
        <Flex>
          <Slogan />
        </Flex>
        <Spacer />
        <Flex>
          <DownloadButton />
        </Flex>

        <Flex
          flex={{ base: 1, md: "auto" }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={5} h={5} color="white" />
              ) : (
                <HamburgerIcon w={30} h={30} color="white" />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav: React.FC<DesktopNavProps> = ({ activeNav, setActiveNav }) => {
  const linkHoverColor = "white";

  return (
    <Stack direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem: NavItem) => (
        <Box
          key={navItem.label}
          as="a"
          href={navItem.href}
          p={2}
          onClick={() => setActiveNav(navItem.label)} // 更新活动导航项
          fontSize={"lg"}
          fontWeight={500}
          color="whiteAlpha.800"
          borderBottom={activeNav === navItem.label ? "2px solid" : "2px solid"} // 显示下划线
          borderColor={activeNav === navItem.label ? "pink.400" : "transparent"} // 设置下划线颜色
          // transition="border-color 0.3s ease, border-bottom 0.3s ease" // 添加过渡效果
          _hover={{
            textDecoration: "none",
            color: linkHoverColor,
          }}
        >
          {navItem.label}
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Anime",
    href: "/anime",
  },
  {
    label: "Games",
    href: "/games",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Install Game",
    href: "https://cdn.jksfun.com/xshy_apk/pixelshippuden_f_release_1021120000.apk",
  },
];

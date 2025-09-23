import Container from "@/components/ui/Container";
import {  Link, NavLink } from "react-router";
import "../../../App.css"
import Logo from "@/assets/icons/Logo.png"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/Redux/features/auth/auth.api";
import { useAppDispatch } from "@/Redux/hooks";



// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home",active:true },
  { href: "about", label: "About" },
  { href: "contact", label: "Contact" },
]

const Navbar = () => {
  const { data } = useUserInfoQuery(undefined);
  const dispatch = useAppDispatch()
  const user = data?.data?.email; 
  const role = data?.data?.role;
  console.log(role)
  const [logout] = useLogoutMutation();


  const handleLogOut = async() => {
    await logout(undefined)
    dispatch(authApi.util.resetApiState())
  }
  
  
  return (
   
    <header className="bg-gradient-to-b from-orange-300  to-orange-400  dark:bg-gray-900">
       <Container className="py-2">
     <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavLink
                       className="py-1.5"
                        to={link.href}>
                           {link.label}
                      </NavLink>
                    
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
            {/* Main nav */}
            
          <div className="flex items-center  gap-6">
            <a href="#" className="text-primary hover:text-primary/90">
              <img className="w-12 h-12" src={Logo} alt="" />
            </a>
            {/* Navigation menu */}
            <NavigationMenu className=" max-md:hidden">
              <NavigationMenuList className="gap-4 ">
               {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavLink
                       className="py-1.5 font-semibold"
                        to={link.href}>
                           {link.label}
                      </NavLink>
                    
                    </NavigationMenuItem>
                  ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          {user &&  <Button onClick={handleLogOut} variant="outline" size="sm" className="text-sm cursor-pointer">
            Logout
           </Button>}
            {
              !user && <Button asChild variant="ghost" size="sm" className="text-sm">
            <Link to={'/login'}>Sign In</Link>
          </Button>
          }
            {
               role === "ADMIN" && <Button asChild size="sm" className="text-sm">
            <Link to={'/admin'}>Get Started</Link>
          </Button>
            }
            {
              role === "RECEIVER" && <Button asChild size="sm" className="text-sm">
            <Link to={'/receiver'}>Get Started</Link>
          </Button>
            }
            {
              role === "SENDER" && <Button asChild size="sm" className="text-sm">
            <Link to={'/sender'}>Get Started</Link>
          </Button>
            }
        </div>
      </div>
   </Container>
</header>

  );
};

export default Navbar;
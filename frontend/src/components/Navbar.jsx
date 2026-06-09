import { Menu, School } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import DarkMode from '@/DarkMode';
import { Sheet, SheetClose, SheetContent,  SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';




const Navbar = () => {
    const user = true;
    return (
        <div className=' h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10 '>

            {/* desktop */}
            <div className=' max-w-7xl mx-auto hidden md:flex justify-between items-center h-full gap-10'>
                <div className='flex items-center gap-2'>
                    <School size={"30"} />
                    <h1 className='hidden md:block font-extrabold texy-2xl'>E-Learning</h1>
                </div>
                {/* user icons and dark mode icon */}
                <div className='flex items-center gap-8'>
                    {
                        user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-40" align="start">
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuItem>
                                            My learning
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Edit Profile
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>

                                        <DropdownMenuItem>
                                            Dashboard
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className='flex items-center gap-2'>
                                <Button variant="outline">Login</Button>
                                <Button >Signup</Button>
                            </div>
                        )
                    }
                    <DarkMode />
                </div>

            </div>
            <div>
                {/* mobile device  */}
                <div className="flex md:hidden items-center justify-between px-4 h-full">
                    <h1 className='font-extrabold text-2xl'>E-learning</h1>
                    <MobileNavbar />
                </div>
            </div>

        </div>
    )
}

export default Navbar

const MobileNavbar = () => {
    const role = "instructor";
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' className="rounded-full bg-gray-200 hover:bg-gray-200" variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="flex flex-row items-center justify-between mt-5">
                    <SheetTitle className="text-xl">E-learning</SheetTitle>
                    <DarkMode />
                </SheetHeader>
                <nav className='flex flex-col space-y-4 ml-4'>
                    <span>My Learning</span>
                    <span>Edit Profile</span>
                    <p>Log out</p>
                </nav>
                {
                    role === "instructor" && (
                        <SheetFooter>
                            <Button type="submit">Dashboard</Button>
                            <SheetClose asChild>
                                <Button variant="outline">Close</Button>
                            </SheetClose>
                        </SheetFooter>

                    )
                }

            </SheetContent>
        </Sheet>



    )
}
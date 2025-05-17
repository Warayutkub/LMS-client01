
import { ModeToggle } from "../darkModeToggle"
import Avatar from "./Avatar"
import Logo from "./Date"
import Setting from "./Setting"

const Navbar = () => {
    return (
        <div className="w-full bg-sidebar flex justify-between h-1/12 px-8 mx-auto">
            <div className="h-full flex items-center">
                <Logo />
            </div>
            <div className="h-full flex items-center gap-2">
                <Setting/>
                <ModeToggle />
                <Avatar/>
            </div>
        </div>
    )
}
export default Navbar
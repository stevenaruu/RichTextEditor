import { Slash } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb"
import { SidebarTrigger } from "../ui/sidebar"
import { useSelector } from "react-redux"
import { selectActiveDocument } from "../../store/document/document-slice"
import { Avatar, AvatarImage } from "../ui/avatar"
import profile from '../../assets/images/profile.jpg'

const Navbar = () => {
  const document = useSelector(selectActiveDocument);
  return (
    <div className="border-b py-2 px-5 w-full flex justify-between">
      <div className="flex gap-3 justify-center items-center">
        <SidebarTrigger />
        <Breadcrumb className="cursor-default">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink>Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink>{document?.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <p className="text-zinc-700 font-semibold">Connected.</p>
        <Avatar>
          <AvatarImage src={profile} /> 
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar
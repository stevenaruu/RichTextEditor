import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"
import { useDispatch, useSelector } from "react-redux"
import { ADD_DOCUMENT, REMOVE_DOCUMENT, selectDocuments, SET_ACTIVE_DOCUMENT } from "../../store/document/document-slice"
import documentImg from '../../assets/icon/document.svg'
import { Button } from "../ui/button"
import { Trash2 } from "lucide-react"

export function AppSidebar() {
  const dispatch = useDispatch();
  const documents = useSelector(selectDocuments);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {documents.map((document) => (
                <SidebarMenuItem key={document.id}>
                  <SidebarMenuButton asChild>
                    <a className="cursor-pointer flex justify-between" href="/" onClick={() => dispatch(SET_ACTIVE_DOCUMENT(document.id))}>
                      <div className="flex gap-2">
                        <img className="size-5" src={documentImg} alt="Document Icon" />
                        <span>{document.title}</span>
                      </div>
                      <Trash2 onClick={() => dispatch(REMOVE_DOCUMENT(document.id))} className="hover:text-red-500" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <Button onClick={() => dispatch(ADD_DOCUMENT())} variant="outline" className="mt-5">
                <a href="/">
                  Add Document
                </a>
              </Button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

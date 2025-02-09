import { SidebarProvider } from "../../components/ui/sidebar"
import { Container } from "../../components/container/container"
import Navbar from "../../components/molecules/navbar"
import { AppSidebar } from "../../components/molecules/app-sidebar"
import Document from "../../components/organisms/document"

import '../../index.css'

const HomePage = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <Navbar />
        <Container>
          <Document />
        </Container>
      </div>
    </SidebarProvider>
  )
}

export default HomePage
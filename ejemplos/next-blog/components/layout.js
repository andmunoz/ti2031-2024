import Navbar from './navbar'
import Footer from './footer'
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">{children}</main>
      <Footer />
    </>
  )
}
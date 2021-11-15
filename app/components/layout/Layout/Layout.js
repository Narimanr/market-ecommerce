import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/layout/Footer/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
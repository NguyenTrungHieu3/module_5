
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-light text-center py-3 mt-4 border-top">
            <p className="mb-0 text-muted">© {currentYear} Quản lý Sinh Viên</p>
        </footer>
    )
}

export default Footer;
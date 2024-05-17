const BottomFooter = () => {
    const date = new Date();
    const thisYear = date.getFullYear();
    return (
        <footer className="footer footer-center p-4 bg-black text-white">
            <aside>
                <p>Copyright © {thisYear} - All right reserved by Digital IT Soft</p>
            </aside>
        </footer>
    );
};

export default BottomFooter;
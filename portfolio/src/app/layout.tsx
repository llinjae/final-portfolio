import "./globals.css";

import { Pretendard } from "../../public/fonts";

interface LayoutProps {
  children: React.ReactNode;
}
 
const Layout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <html>
      <body className={Pretendard.className}>
        {children}
      </body>
    </html>
  );
};

export default Layout;

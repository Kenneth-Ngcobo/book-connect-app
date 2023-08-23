import MainHeader from "./MainHeader";

export default function Layout({children}){
    <>
        <Header></Header>
        <main>{children}</main>
    </>

}
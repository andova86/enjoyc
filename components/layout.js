import Navbar from "./navbar";

export default function Layout({ children })
{
    return (
        <div>

           <Navbar />
          
            <main>

            { children }

            </main>

            
            <footer>
                <div className="container text-center py-4">
                <h1>Este es el Footer</h1>

                </div>
                
            </footer>

        </div>
    )
}
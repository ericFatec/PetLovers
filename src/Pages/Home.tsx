export default function Home() {
    return (
            <div className="max-w-4xl bg-cat-white-200 shadow-xl rounded-lg p-10">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-dog-brown-200">
                    Bem-vindo ao <span className="text-heart-peach-400">PetLovers!</span>
                </h1>
                <p className="text-lg text-center mb-10">
                    Obrigado por escolher o <span className="font-bold text-heart-peach-400">PetLovers</span> como seu sistema de gestão. 
                    Criado especialmente para petshops e clínicas veterinárias, nossa solução facilita o dia a dia do seu negócio com uma interface moderna e intuitiva.
                </p>
                <div className="space-y-6">
                    <div className="p-6 bg-heart-peach-100 rounded-lg shadow-md text-dog-brown-200">
                        <h2 className="text-xl font-bold">Gerenciar Clientes</h2>
                        <p className="mt-2 text-sm">
                            Atualize o cadastro de seus clientes e gerencie informações de forma prática e organizada.
                        </p>
                    </div>
                    <div className="p-6 bg-heart-peach-200 rounded-lg shadow-md text-dog-brown-200">
                        <h2 className="text-xl font-bold">Gerenciar Produtos</h2>
                        <p className="mt-2 text-sm">
                            Controle o estoque e acompanhe suas vendas de maneira eficiente e prática.
                        </p>
                    </div>
                    <div className="p-6 bg-heart-peach-300 rounded-lg shadow-md text-dog-brown-300">
                        <h2 className="text-xl font-bold">Gerenciar Serviços</h2>
                        <p className="mt-2 text-sm">
                            Organize os serviços oferecidos e garanta uma experiência de alta qualidade aos seus clientes.
                        </p>
                    </div>
                    <div className="p-6 bg-heart-peach-400 rounded-lg shadow-md text-dog-brown-300">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                        <p className="mt-2 text-sm">
                            Monitore métricas importantes do seu negócio, como vendas e desempenho geral.
                        </p>
                    </div>
                </div>
            </div>
    );
}

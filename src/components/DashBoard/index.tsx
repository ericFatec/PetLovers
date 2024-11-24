import { Component } from "react";

export default class Dashboard extends Component {
    render() {
        return (
            <div className="mx-auto mt-5">
                {/* Grid container for all the sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {/* Listagem geral de produtos e serviços mais consumidos */}
                    <div className="mb-5">
                        <div className="text-center text-2xl font-semibold mb-4 text-dog-brown-300">
                            Produtos e serviços mais consumidos
                        </div>
                        <div className="overflow-x-auto bg-cat-white-200 rounded-lg shadow-md">
                            <table className="min-w-full table-auto">
                                <thead className="bg-dog-brown-200 text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Nome</th>
                                        <th className="px-4 py-2 text-left">Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Produto 1</td>
                                        <td className="px-4 py-2">20</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Serviço 4</td>
                                        <td className="px-4 py-2">10</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Produto 3</td>
                                        <td className="px-4 py-2">5</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Produto 4</td>
                                        <td className="px-4 py-2">4</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Serviço 1</td>
                                        <td className="px-4 py-2">3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 10 clientes que mais consumiram em quantidade */}
                    <div className="mb-5">
                        <div className="text-center text-2xl font-semibold mb-4 text-dog-brown-300">
                            Clientes que mais consumiram em quantidade
                        </div>
                        <div className="overflow-x-auto bg-cat-white-200 rounded-lg shadow-md">
                            <table className="min-w-full table-auto">
                                <thead className="bg-dog-brown-200 text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Nome cliente</th>
                                        <th className="px-4 py-2 text-left">Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cliente 1</td>
                                        <td className="px-4 py-2">20</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cliente 2</td>
                                        <td className="px-4 py-2">10</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cliente 3</td>
                                        <td className="px-4 py-2">5</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cliente 4</td>
                                        <td className="px-4 py-2">4</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cliente 5</td>
                                        <td className="px-4 py-2">3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 5 clientes que mais consumiram em valor */}
                    <div className="mb-5">
                        <div className="text-center text-2xl font-semibold mb-4 text-dog-brown-300">
                            Clientes que mais gastaram
                        </div>
                        <div className="overflow-x-auto bg-cat-white-200 rounded-lg shadow-md">
                            <table className="min-w-full table-auto">
                                <thead className="bg-dog-brown-200 text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Nome cliente</th>
                                        <th className="px-4 py-2 text-left">Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cliente 1</td>
                                        <td className="px-4 py-2">R$ 20</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cliente 2</td>
                                        <td className="px-4 py-2">R$ 10</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cliente 3</td>
                                        <td className="px-4 py-2">R$ 5</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cliente 4</td>
                                        <td className="px-4 py-2">R$ 4</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cliente 5</td>
                                        <td className="px-4 py-2">R$ 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Listagem de serviços e produtos mais consumidos por tipo de pet e raça */}
                    <div className="mb-5">
                        <div className="text-center text-2xl font-semibold mb-4 text-dog-brown-300">
                            Produtos mais consumidos por tipo de pet
                        </div>
                        <div className="overflow-x-auto bg-cat-white-200 rounded-lg shadow-md">
                            <table className="min-w-full table-auto">
                                <thead className="bg-dog-brown-200 text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-left">Tipo Pet</th>
                                        <th className="px-4 py-2 text-left">Raça Pet</th>
                                        <th className="px-4 py-2 text-left">Nome</th>
                                        <th className="px-4 py-2 text-left">Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cachorro</td>
                                        <td className="px-4 py-2">Golden</td>
                                        <td className="px-4 py-2">Produto 1</td>
                                        <td className="px-4 py-2">20</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cachorro</td>
                                        <td className="px-4 py-2">Buldogue</td>
                                        <td className="px-4 py-2">Serviço 4</td>
                                        <td className="px-4 py-2">10</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Cachorro</td>
                                        <td className="px-4 py-2">Poodle</td>
                                        <td className="px-4 py-2">Produto 3</td>
                                        <td className="px-4 py-2">5</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Gato</td>
                                        <td className="px-4 py-2">SRD</td>
                                        <td className="px-4 py-2">Produto 4</td>
                                        <td className="px-4 py-2">4</td>
                                    </tr>
                                    <tr className="border-b border-dog-brown-100">
                                        <td className="px-4 py-2">Gato</td>
                                        <td className="px-4 py-2">Siamês</td>
                                        <td className="px-4 py-2">Serviço 1</td>
                                        <td className="px-4 py-2">3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

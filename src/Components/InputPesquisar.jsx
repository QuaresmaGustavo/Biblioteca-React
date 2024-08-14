export default function InputPesquisar({ setValorPesquisado }) {
    return (
        <div className="flex justify-center px-2 py-2 mx-36">
            <div className="flex justify-center px-2 py-1 font-medium w-full sm:w-4/5">
                <input type="text"
                    className="px-2 py-1 font-medium rounded-md shadow-md bg-gray-300 hover:bg-gray-100 sm:w-4/5"
                    placeholder="Pesquisar por um livro"
                    onChange={(e) => setValorPesquisado(e.target.value)} />
            </div>
        </div>
    );
}
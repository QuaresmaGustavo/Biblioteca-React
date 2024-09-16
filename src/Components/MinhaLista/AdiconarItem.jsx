
export default function AdicionarLista({id}) {

    const Cadastrar = async () => {
            try {
                await fetch('http://localhost:8080/minhaLista/salvar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    },
                    body: JSON.stringify({
                        usuarioId: sessionStorage.getItem('id'),
                        itemId: id
                      })
                })
            } catch (error) {

                console.error('Erro na API', error)
            }
        };


    return (
        <div className="flex pt-3 justify-end">
            <a href="minhaLista" className="w-24">
                <button className="bg-blue-600 w-24 h-8 text-white text-sm rounded-sm hover:bg-blue-300" onClick={Cadastrar}>
                    + Minha Lista
                </button>
            </a>
        </div>
    );
}
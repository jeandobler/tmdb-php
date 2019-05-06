export default function (code) {

    switch (code) {

        case 'business-40001':
            return {
                message: "Credenciais inválidas"
            }

        default :
            return {
                message: "Ocorreu um erro inesperado"
            }

    }


}

interface HabitProps {
    completed: number
}

class Pessoa {

}

// Criando uma função em react
export function Habit(props: HabitProps) {
    return (
        // Quando eu quero mostrar uma variável JavaScript
        //dentro do HTML e não só texto, é preciso está por volta de chaves
        // w -> width (Largura)
        // h -> height (Altura)
        // m -> margin
        <div className='bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center'>
            {props.completed}
        </div>
    )
}
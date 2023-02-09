interface HabitProps {
    completed: number
}

// Criando uma função em react
export function Habit(props: HabitProps) {
    return (
        // Quando eu quero mostrar uma variável JavaScript
        //dentro do HTML e não só texto, é preciso está por volta de chaves
        <p>{props.completed}</p>
    )
}
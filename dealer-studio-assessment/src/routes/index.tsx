import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'
import CardMenu from '../components/Cardmenu'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div>
            <Header></Header>
            <CardMenu></CardMenu>
        </div>
    )
}

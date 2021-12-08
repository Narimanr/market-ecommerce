import rowStyle from './SpecialRow.module.scss';

// Import Interface
import { iSpecial } from '@/interfaces/Interfaces';

import SpecialCard from '@/components/element/Card/SpecialCard/SpecialCard';

interface SpecialProps {
    items: iSpecial[]
};


export default function SpecialRow(props: SpecialProps) {
    return (
        <section className={rowStyle.specialRow}>
            {props.items.map(item => {
                return (
                    <SpecialCard key={item.title} title={item.title} subtitle={item.subtitle} image={item.image} color={item.color} />
                );
            }
            )}
        </section>
    )
}
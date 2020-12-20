export default {
    topics: [
        {
            label: 'Všechna témata',
            tag: 3205,
            type: 'tag'
        },
        {
            label: 'Farmaceutické firmy',
            key: 1,
            tag: 1160,
            type: 'tag',
            children: [
                {label: 'GlaxoSmithKline'},
                {label: 'Novartis'},
                {label: 'Pfizer'},
                {label: 'Sanofi Aventis'},
                {label: 'Zentiva'}
            ]
        },
        {
            label: 'Produkty',
            key: 2,
            tag: 35,
            type: 'tag',
            children: [
                {label: 'Analgetika'},
                {label: 'Antikoncepce'},
                {label: 'Očkování děložního čípku'},
                {label: 'Očkování kombinace'}
            ]
        },
        {
            label: 'Zdraví, nemoc a farmacie',
            key: 3,
            tag: 2789,
            type: 'tag',
            children: [
                {label: 'Antikoncepce'},
                {label: 'Očkování'},
                {label: 'Homeopatie'},
                {label: 'Elektronizace zdravotnictví'}
            ]
        },
        {
            label: 'Legislativa',
            tag: 132,
            type: 'tag'},
        {label: 'Společnosti'},
        {label: 'Oborové články'}
    ],
    folders: [
        {
            label: 'Všechny složky',
            icon: 'pi pi-folder',
            tag: 5,
            type: 'tag'
        },
        {
            label: 'Export',
            icon: 'pi pi-folder',
            tag: 4,
            type: 'tag'
        },
        {
            label: 'test',
            icon: 'pi pi-folder',
            tag: 1,
            type: 'tag'
        },
        {
            label: 'Logistika',
            icon: 'pi pi-folder'
        }
    ]
}
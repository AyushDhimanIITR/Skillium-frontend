const columns = [
    {
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank',
    },

    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Class',
        dataIndex: 'grade',
        key: 'class',
    },
    {
        title: 'Diamonds',
        dataIndex: 'totalDiamonds',
        key: 'diamonds',
    },
    {
        title:"Id",
        dataIndex: 'id'
    },
    {
        title:'Level',
        dataIndex: 'finalScores',
        render: (finalScores) => finalScores.length,
        key:'level'
    }

]

export default columns;
const styles = {
    tooltipContainer: {
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
    },
    tooltipText: {
        visibility: 'hidden',
        width: '120px',
        backgroundColor: '#555',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '6px',
        padding: '5px 0',
        position: 'absolute',
        zIndex: '1',
        bottom: '125%',
        left: '50%',
        marginLeft: '-60px',
        opacity: '0',
        transition: 'opacity 0.3s',
    },
    tooltipContainerHover: {
        '&:hover .tooltipText': {
            visibility: 'visible',
            opacity: '1',
        },
    },
};

export default styles;

declare const _default: {
    props: {
        autoMount: any;
        autoDestroy: any;
        visible: any;
        forceRender: any;
        parent: any;
        getComponent: any;
        getContainer: any;
        children: any;
    };
    mounted(): void;
    updated(): void;
    beforeDestroy(): void;
    methods: {
        removeContainer(): void;
        renderComponent(props: {}, ready: any): void;
    };
    render(): any;
};
export default _default;

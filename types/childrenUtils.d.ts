import { VNode } from 'vue';
declare const ChildrenUtils: {
    findChildInChildrenByKey(children: Array<VNode>, key: string | number): VNode | null;
};
export default ChildrenUtils;

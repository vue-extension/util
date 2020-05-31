import { VNode } from 'vue';
const ChildrenUtils = {
    findChildInChildrenByKey(
        children: Array<VNode>,
        key: string | number
    ): VNode | null {
        let ret: VNode | null = null;
        if (children) {
            children.forEach((c) => {
                if (ret) {
                    return;
                }
                if (c && c.key === key) {
                    ret = c;
                }
            });
        }
        return ret;
    }
}
export default ChildrenUtils;
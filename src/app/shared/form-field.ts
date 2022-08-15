export class FormField<T> {
    value: T | undefined;
    key: string;
    label: string;
    required: boolean;
    validator: string;
    type: string;
    controlType: string;
    order:number;
    options: { key: string; value: string }[];

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        validator?: string;
        type?: string;
        order?: number;
        controlType?: string;
        options?: { key: string; value: string }[];
    } = {}
    ) {
        this.value = options.value;
        this.key = options.key || "";
        this.label = options.label || "";
        this.required = !!options.required;
        this.validator = options.validator || "";
        this.type = options.type || "";
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || "";
        this.options = options.options || [];
    }
}

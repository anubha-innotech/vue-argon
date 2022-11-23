<template>
  <div class="form-group">
    <div :class="hasIcon(icon)">
      <span v-if="iconDir === 'left'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
      <input
        :type="type"
        class="form-control"
        :class="getClasses(size, valid)"
        :name="name"
        :value="inputValue"
        :id="id"
        :placeholder="placeholder"
        :isRequired="isRequired"
        v-model="inputValue"
        @input="updateValue"
        @blur="onBlur"
        @focus="onFocus"
      />
      <span v-if="iconDir === 'right'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "argon-input",
  props: {
    size: {
      type: String,
      default: "default",
    },
    valid: {
      type: Boolean,
      default: false,
    },
    icon: String,
    iconDir: String,
    name: String,
    id: String,
    value: String,
    placeholder: String,
    type: String,
    isRequired: Boolean,
  },
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    getClasses: (size, valid) => {
      let sizeValue, isValidValue;

      sizeValue = size ? `form-control-${size}` : null;

      isValidValue = valid ? `${valid}` : "invalid";

      return `${sizeValue} ${isValidValue}`;
    },
    getIcon: (icon) => (icon ? icon : null),
    hasIcon: (icon) => (icon ? "input-group" : null),
    // onFocus() {
    //   console.log('argun input');
    //   this.$emit('on-focus',this.value)
    // },
    // onBlur() {
    //   console.log('on blur')
    //   this.$emit('on-blur',this.value)
    // },
    updateValue() {
      this.$emit('update-value',this.inputValue)
    }
  },
  created() {
    this.inputValue = this.value
  }
};
</script>

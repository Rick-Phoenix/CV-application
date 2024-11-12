export let formData = {
  personalInfoForm: {},
  bioForm: {},
  eduForm: { rows: [{ key: 0 }], counter: 0 },
  profForm: { rows: [{ key: 0 }], counter: 0 },
  hobbiesForm: { rows: [{ key: 0 }], counter: 0 },
};

export function resetData() {
  formData = {
    personalInfoForm: {},
    bioForm: {},
    eduForm: { rows: [{ key: 0 }], counter: 0 },
    profForm: { rows: [{ key: 0 }], counter: 0 },
    hobbiesForm: { rows: [{ key: 0 }], counter: 0 },
  };
}

export function saveData(entryName, entries) {
  formData[entryName] = entries;
}

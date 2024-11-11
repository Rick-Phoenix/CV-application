export let formData = {
  credentialsForm: {},
  bioForm: {},
  eduForm: { rows: [{ key: 0 }], counter: 0 },
  profForm: { rows: [{ key: 0 }], counter: 0 },
};

export function resetData() {
  formData = {
    credentialsForm: {},
    bioForm: {},
    eduForm: { rows: [{ key: 0 }], counter: 0 },
    profForm: { rows: [{ key: 0 }], counter: 0 },
  };
}

export function saveData(entryName, entries) {
  formData[entryName] = entries;
}

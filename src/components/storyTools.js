export const TEXT_PROPERTY = { control: { type: "text" } };

const BOOLEAN_PROPERTY = { control: "boolean" };

const mapToX = (control) => (properties) =>
  properties.reduce((obj, prop) => {
    obj[prop] = control;
    return obj;
  }, {});

export const mapToText = mapToX(TEXT_PROPERTY);

export const mapToBoolean = mapToX(BOOLEAN_PROPERTY);

export const mapToSelect = (data) => {
  const options = data.length ? data : Object.keys(data);

  return {
    options,
    control: { type: "select" },
  };
};

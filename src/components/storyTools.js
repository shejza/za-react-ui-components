export const TEXT_PROPERTY = { control: { type: "text" } };

const BOOLEAN_PROPERTY = { control: { type: "boolean" } };

const NUMBER_PROPERTY = { control: { type: "number" } };

const COLOR_PROPERTY = { control: { type: "color" } };

const mapToX = (control) => (properties) =>
  properties.reduce((obj, prop) => {
    obj[prop] = control;
    return obj;
  }, {});

export const mapToText = mapToX(TEXT_PROPERTY);

export const mapToBoolean = mapToX(BOOLEAN_PROPERTY);

export const mapToNumber = mapToX(NUMBER_PROPERTY);

export const mapToColor = mapToX(COLOR_PROPERTY);

export const mapToSelect = (data) => {
  const options = data.length ? data : Object.keys(data);

  return {
    options,
    control: { type: "select" },
  };
};

export const delayedresponse = (data, time) => () => {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
};

export const designLink = (url) => ({ design: { type: "figma", url } });

export const designParameter = (url) => ({ parameters: { ...designLink(url) } });

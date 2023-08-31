export const bufferTag = (encoding: BufferEncoding) => {
  return function (strings: TemplateStringsArray, ...values: any): Buffer {
    const result: Buffer[] = [];
    for (let i = 0; i < strings.length; i++) {
      result.push(Buffer.from(strings[i], encoding));
      if (i < values.length) {
        const value = values[i] || '';
        result.push(Buffer.isBuffer(value) ?
          value :
          Buffer.from(value, encoding));
      }
    }
    return Buffer.concat(result);
  }
};

export const ascii = bufferTag('ascii');
export const utf8 = bufferTag('utf8');
export const utf16le = bufferTag('utf16le');
export const ucs2 = bufferTag('ucs2');
export const base64 = bufferTag('base64');
export const base64url = bufferTag('base64url');
export const latin1 = bufferTag('latin1');
export const binary = bufferTag('binary');
export const hex = bufferTag('hex');

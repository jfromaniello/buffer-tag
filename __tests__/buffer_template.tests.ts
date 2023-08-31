import { bufferTag, utf8 } from '../src';


describe('buffer-template', () => {
  it('should work for an utf8 tag', () => {
    const expected = Buffer.from('test', 'utf8');
    const actual = utf8`test`;
    expect(actual.compare(expected)).toBe(0);
  });

  it('should work for an utf8 tag with embedded values', () => {
    const expected = Buffer.from('test foo bar', 'utf8');
    const actual = utf8`test ${'foo bar'}`;
    expect(actual.compare(expected)).toBe(0);
  });

  it('should work for an utf8 tag with embedded values at the beginning', () => {
    const expected = Buffer.from('foo bar test', 'utf8');
    const actual = utf8`${'foo bar'} test`;
    expect(actual.compare(expected)).toBe(0);
  });

  it('can embed buffers inside a template', () => {
    const expected = Buffer.from('foo bar test', 'utf8');
    const actual = utf8`${Buffer.from('foo bar', 'utf8')} test`;
    expect(actual.compare(expected)).toBe(0);
  });
});

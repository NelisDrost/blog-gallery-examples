/* tslint:disable */
/* eslint-disable */
export enum Cell {
  Dead = 0,
  Alive = 1,
}
export class Universe {
  private constructor();
  free(): void;
  static new(width: number, height: number): Universe;
  tick(): void;
  render(): string;
  width(): number;
  height(): number;
  cells(): number;
  /**
   * Set the width of the universe.
   *
   * Resets all cells to the dead state.
   */
  set_width(width: number): void;
  /**
   * Set the height of the universe.
   *
   * Resets all cells to the dead state.
   */
  set_height(height: number): void;
  clear(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_universe_free: (a: number, b: number) => void;
  readonly universe_new: (a: number, b: number) => number;
  readonly universe_tick: (a: number) => void;
  readonly universe_render: (a: number) => [number, number];
  readonly universe_width: (a: number) => number;
  readonly universe_height: (a: number) => number;
  readonly universe_cells: (a: number) => number;
  readonly universe_set_width: (a: number, b: number) => void;
  readonly universe_set_height: (a: number, b: number) => void;
  readonly universe_clear: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_3: WebAssembly.Table;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;

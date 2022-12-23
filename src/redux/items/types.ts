export type DataItem = {
  id: number;
  title: string;
  price: number;
  imagePath: string;
  imageChange: string;
  sizes: number[];
  types: number[];
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface DataSliceState {
  status: Status;
  items: DataItem[];
}

export type FetchParams = {
  currentPage: number;
  category: string;
  sortPrice: string;
};

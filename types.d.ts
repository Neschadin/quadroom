type TMockData = {
  title: string;
  text: string;
  list: string[];
};

type ActionState = {
  status: 'success';
  message: string;
} | null;

type FormValues = {
  name: string;
  mobile: string;
  email: string;
  comment: string;
};

type TSlider = { initSlide: number };

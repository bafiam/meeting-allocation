// combinations without repetition
const gen_collection = (collection, n) => {
  if (collection.length < n) {
    return [];
  }
  let recur = (array, n) => {
    if (--n < 0) {
      return [[]];
    }
    let combinations = [];
    array = [...array];
    while (array.length - n) {
      let value = array.shift();
      recur(array, n).forEach((combination) => {
        combination.unshift(value);
        combinations.push(combination);
      });
    }
    return combinations;
  };
  return recur(collection, n);
};
// array stating from 1 to last person
const range = (start, stop) =>
  Array.from({ length: (stop + 1 - start) / 1 }, (_, i) => [start + i]);

// data processing and time processing
const data_process = (N, P, TpM, T, data) => {
  let results = [];
  rooms = Math.floor(N / P);
  results.push({
    total_number_of_rooms_to_have_meetings_simultaneously: rooms,
  });
  sessions = data.length;
  results.push({ Unique_groups_of_P: sessions });

  results.push({
    total_number_of_sessions: Math.floor(sessions / rooms),
  });

  results.push({ participants_in_groups_of_P: JSON.stringify(data) });
  return results;
};

const findCommonElement = (array1, array2) => {
  let count = 0;

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        count++;
      }
    }
  }

  return count;
};

const analyzer = (data_arr) => {
  let data = [];

  for (let index = 0; index < data_arr.length; index++) {
    const element = data_arr[index];
    if (index == 0) {
      data.push(element);
    } else {
      let res = [];
      let test_selected = [].concat.apply([], element);

      data.forEach((final) => {
        let final_selected = [].concat.apply([], final);

        let check = findCommonElement(test_selected, final_selected);

        res.push(check);
      });

      let results = res.filter((num) => num > 1);

      if (results.length === 0) {
        data.push(element);
      }
    }
  }

  return data;
};
// run script
const run = (N, P, TpM, T) => {
  let people = range(1, N);

  let uniq = gen_collection(people, P);

  let final = analyzer(uniq);

  return data_process(N, P, TpM, T, final);
};

let a = run(20, 4, 20, 2);
console.log(a);

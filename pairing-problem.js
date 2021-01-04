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

// return uniq array given an array
const get_all_uniq = (uniq, data, P) => {
  let rest = [];
  for (let index = 0; index < uniq.length; index++) {
    const element = uniq[index];
    len = data.length;
    elm = data[len - 1];
    let merged_selected = [].concat.apply([], elm);
    let merged_transit = [].concat.apply([], element);
    let group = merged_selected.concat(merged_transit);
    let unique = [...new Set(group)];
    if (unique.length === P * 2) {
      rest.push(element);
    }
  }
  return rest;
};
// data processing and time processing 
const data_process = (N, P, TpM, T, data) => {
  let results = [];
  rooms = Math.floor(N / P);
  results.push({
    total_number_of_rooms_to_have_meetings_simultaneously: rooms,
  });
  sessions = Math.floor(data.length);
  results.push({ total_number_of_possible_sessions: sessions });
  let time_in_mins = T * 60;
  results.push({ total_time_of_one_sessions_in_mins: TpM });
  let total_number_of_session = Math.floor(time_in_mins / TpM);
  results.push({
    total_number_of_sessions: total_number_of_session,
  });
  let participants = [];
  for (let index = 1; index < data.length; index++) {
    const element = data[index];
    if (index <= total_number_of_session) {
      participants.push(element);
    }
  }

  results.push({ participants_per_sessions: participants });
  return results;
};
// run script
const run = (N, P, TpM, T) => {
  let people = range(1, N);
  let uniq = gen_collection(people, P);
  let data = [];
  uniq.forEach((elem) => {
    let test = [];
    test.push(elem);
    let uniq_r = get_all_uniq(uniq, test, P);
    while (uniq_r.length > 0) {
      test.push(uniq_r[0]);
      uniq_r = get_all_uniq(uniq_r.slice(1), test, P);
    }
    data.push(test);
  });

  return data_process(N, P, TpM, T, data);
};

let a = run(6, 3, 20, 2);
console.log(a);

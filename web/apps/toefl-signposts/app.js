/* Signpost Language Trainer: the phrases lecturers use to show the structure of a talk. */
(function () {
  'use strict';
  const items = (sp, n, seed) => {
    const r = SK.rng(seed), names = Object.fromEntries(sp.groups.map((g) => [g.id, g.name]));
    return SK.sample(r, sp.items, n).map((x) => {
      const wrong = SK.sample(r, sp.groups.filter((g) => g.id !== x.answer), 3).map((g) => g.name);
      return SK.shuffleItem(r, { id: x.id, type: 'single', topic: names[x.answer], stem: 'Listen. What is the speaker doing?', audio: { title: 'Lecture line', text: x.say }, choices: [names[x.answer]].concat(wrong), answer: 0, explanation: '"' + x.say + '" The signpost shows: ' + names[x.answer].toLowerCase() + '.' });
    });
  };
  const App = {
    about: 'Lecturers signal where a talk is going: another factor is, that said, take for example, to sum up. Recognizing these signposts helps you follow a talk and answer organization questions. Learn nine groups of signposts and practise naming them from spoken lines.',
    how: ['Learn the groups in **Signposts**.', 'In **Practice**, listen to a lecture line and say what the speaker is doing.', 'In real lectures, write each signpost in your notes: it marks a new point.'],
    tabs: [
      { id: 'practice', label: 'Practice', render(el, ctx) { SK.quizStarter(el, { title: 'Name the signpost', sizes: [8, 16], make: (t, n, s) => items(ctx.data.signposts, n, s), seconds: (n) => n * 25 }); } },
      { id: 'list', label: 'Signposts', render(el, ctx) { el.appendChild(SK.card('Signpost groups', SK.table(['What the speaker is doing', 'Phrases'], ctx.data.signposts.groups.map((g) => [g.name, g.phrases.join('; ')]), false))); } },
    ],
    items,
    checks: { 'every line points to a group and questions are valid': (data, assert) => {
      const ids = new Set(data.signposts.groups.map((g) => g.id));
      for (const x of data.signposts.items) assert.ok(ids.has(x.answer), x.id);
      for (const it of items(data.signposts, 16, 3)) assert.deepEqual(SK.validateItem(it), []);
    } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();

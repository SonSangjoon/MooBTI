from nrclex import NRCLex
import matplotlib.pyplot as plt
import numpy as np

# change scripts
text_object = NRCLex("""""")

labels = np.array(list(text_object.raw_emotion_scores.keys()))
stats = list(text_object.raw_emotion_scores.values())
stats = np.array([round((i / sum(stats) * 100), 2) for i in stats])
print(labels)  # check label
print(stats)  # check stats

angles = np.linspace(0, 2 * np.pi, len(labels), endpoint=False)
# close the plot
stats = np.concatenate((stats, [stats[0]]))
angles = np.concatenate((angles, [angles[0]]))

fig = plt.figure(figsize=(10, 6))
ax = fig.add_subplot(111, polar=True)
ax.plot(angles, stats, "o-", linewidth=2)
ax.fill(angles, stats, alpha=0.25)
ax.set_thetagrids(angles * 180 / np.pi, labels)
ax.grid(True)

# save radar chart
fig.savefig("./result/name.png")  # change name to character name


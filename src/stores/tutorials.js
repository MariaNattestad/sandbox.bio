import { readable } from "svelte/store";
import { config as terminalIntro } from "$content/terminal-basics/config.js";
import { config as igvIntro } from "$content/igv-intro/config.js";
import { config as bedtoolsIntro } from "$content/bedtools-intro/config.js";
import { config as bowtie2Intro } from "$content/bowtie2-intro/config.js";
import { config as samtoolsIntro } from "$content/samtools-intro/config.js";
import { config as jqIntro } from "$content/jq-intro/config.js";
import { config as awkIntro } from "$content/awk-intro/config.js";
import { config as fastpIntro } from "$content/fastp-intro/config.js";
import { config as dnaSecrets } from "$content/dna-secrets/config.js";
import { config as viralAmplicon } from "$content/viral-amplicon/config.js";
import { config as debuggingPuzzles } from "$content/debugging-puzzles/config.js";
import { config as playground } from "$content/playground/config.js";
import { config as rosalind } from "$content/rosalind/config.js";
import { config as IFB1 } from "$content/ifb-1/config.js";
import { config as IFB2 } from "$content/ifb-2/config.js";

// All tutorials
export const tutorials = readable([
	// Playground
	playground,
	rosalind,
	// Terminal Tutorials
	terminalIntro,
	jqIntro,
	awkIntro,
	// Bioinformatics
	bedtoolsIntro,
	bowtie2Intro,
	samtoolsIntro,
	fastpIntro,
	igvIntro,
	dnaSecrets,
	viralAmplicon,
	debuggingPuzzles,
	// IFB Tutorials (unlisted)
	IFB1,
	IFB2
]);

// Playgrounds
export const playgrounds = readable([
	// TODO: bring back CLI playground
	// {
	// 	name: "Command Line",
	// 	description: "Command line for open-ended exploration",
	// 	url: "/playgrounds/cli",
	// 	tags: ["command line", "terminal", "bash"]
	// },
	{
		name: "Awk",
		description: "Filter and wrangle tabular data",
		url: "/playgrounds/awk",
		tags: ["awk"]
	},
	{
		name: "Jq",
		description: "Filter and wrangle JSON data",
		url: "/playgrounds/jq",
		tags: ["jq", "json"]
	},
	{
		name: "Grep",
		description: "Search and filter utility",
		url: "/playgrounds/grep",
		tags: ["grep"]
	},
	{
		name: "Sed",
		description: "Search and replace utility",
		url: "/playgrounds/sed",
		tags: ["sed"]
	}
]);

// Linkouts
export const explore = readable([
	{
		name: "Bioinformatics Algorithms",
		description: "Try your hand at solving Rosalind exercises using Python.",
		url: "/rosalind",
		tags: ["rosalind", "python", "exercises"]
	},
	{
		name: "Align DNA sequences",
		description: "Explore the Smith-Waterman and Needleman-Wunsch sequence alignment algorithms.",
		url: "https://alignment.sandbox.bio/",
		tags: ["smith-waterman", "needleman-wunsch"]
	},
	{
		name: "Simulate DNA sequences",
		description: "Simulate DNA sequencing reads with <code>wgsim</code>.",
		url: "https://wgsim.sandbox.bio/",
		tags: ["wgsim"]
	},
	{
		name: "t-SNE algorithm",
		description: "Run t-SNE on single-cell sequencing data.",
		url: "https://tsne.sandbox.bio/",
		tags: ["t-SNE"]
	},
	{
		name: "QC reports for FASTQ files",
		description: "Generate data quality reports with <code>fastp</code>.",
		url: "https://fastq.sandbox.bio/",
		tags: ["fastp"]
	}
]);

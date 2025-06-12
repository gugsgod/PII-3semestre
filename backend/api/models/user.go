package models

type Aluno struct {
	ID			int `json:"id"`
	Nome 			string `json:"nome"`
	ID_TURMA		string `json:"id_turma"`
	FUNCAO			string `json:"funcao"`
	EMAIL			string `json:"email"`
}

type NomeAluno struct{
	ID			int 	`json:"id"`
	NOME		string  `json:"nome"`
}


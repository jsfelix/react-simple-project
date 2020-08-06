import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no GitHub</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/3003222?s=460&v=4"
          alt="Jefferson Felix"
        />
        <div>
          <strong>jsfelix/cep-aberto</strong>
          <p>Ruby Connector for the CEP Aberto API</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/3003222?s=460&v=4"
          alt="Jefferson Felix"
        />
        <div>
          <strong>jsfelix/cep-aberto</strong>
          <p>Ruby Connector for the CEP Aberto API</p>
        </div>

        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/3003222?s=460&v=4"
          alt="Jefferson Felix"
        />
        <div>
          <strong>jsfelix/cep-aberto</strong>
          <p>Ruby Connector for the CEP Aberto API</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;

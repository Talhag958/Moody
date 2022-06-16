import { UsersList } from "../../../components/users/UsersList";
import { render, screen } from "@testing-library/react";
const axios = require("axios");
jest.mock("axios");

const mockedUserResponse = [
  {
    id: 1,
    name: 'name',
    username: 'userName',
    email: 'email',
    address: {
      street: 'street',
      suite: 'suite',
      city: 'city',
      zipcode: 'zipCode',
      geo: {
        lat: 'lat',
        lng: 'lng',
      }
    },
    phone: 'phone',
    website: 'website',
    company: {
      name: 'CompanyName',
      catchPhrase: 'catchPhrase',
      bs: 'bs',
    },
    avatar: 'mock_avatar_url',
  }
];

const mockedAvatarResponse = "moke_url";

describe("Users RTL test", () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({ data: mockedUserResponse, status: 200 })
  );

  axios.get.mockImplementation(() =>
    Promise.resolve({ data: mockedAvatarResponse, status: 200 })
  );

  it("should render UserList", async () => {
    render(<UsersList users={mockedUserResponse} />);

    expect(screen.getByText(mockedUserResponse[0].email)).toBeInTheDocument();
    expect(screen.getByText(mockedUserResponse[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockedUserResponse[0].phone)).toBeInTheDocument();
    const avatar = screen.getByRole("img");
    expect(avatar).toHaveAttribute(
      "src",
      "data:image/svg+xml;utf8,mock_avatar_url"
    );
  });
});

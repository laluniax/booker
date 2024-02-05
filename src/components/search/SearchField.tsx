import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getPostsHandler, getProductListHandler } from '../../api/Supabase.api';
import { ProductsTypes } from '../../types/types';
import { formatCreatedAt } from '../../utils/date';
import Loading from '../common/loading/Loading';
import Pagination from '../common/pagination/Pagination';
import * as St from './SearchField.styled';
import { BestsellerTypes, BooksInfoTypes, PostsTypes } from './SearchField.type';

const SearchField = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('search');
  const navigate = useNavigate();
  const [bookertalkList, setBookertalkList] = useState<PostsTypes[]>([]);
  const [marketList, setMarketList] = useState<ProductsTypes[]>([]);
  const [bestSellerList, setBestSellerList] = useState<BestsellerTypes[]>([]);
  const [newBook, setNewBook] = useState<BooksInfoTypes[]>([]);
  const [bookSpecial, setBookSpecial] = useState<BooksInfoTypes[]>([]);
  const [bookerPick, setBookerPick] = useState<BooksInfoTypes[]>([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const [currentPostsPage, setCurrentPostsPage] = useState(1);

  const getPost = async () => {
    try {
      const posts = await getPostsHandler();
      const filteredPosts = posts.filter((item) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase()) ||
          item.content.toLowerCase().includes(keyword?.toLowerCase()) ||
          (item.tags && item.tags.some((item: string) => item.toLowerCase().includes(`#${keyword}`?.toLowerCase())))
        );
      });
      setBookertalkList(filteredPosts.sort((a, b) => b.id - a.id));
    } catch (error) {
      console.log(error);
    }
  };

  const getBook = async () => {
    try {
      setLoading1(true);
      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller`);
      const filteredBestSellers = response.data.item.filter((item: BestsellerTypes) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.author.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.publisher.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.description.toLowerCase().includes(keyword?.toLowerCase() as string)
        );
      });
      setBestSellerList(filteredBestSellers);
      setLoading1(false);
    } catch (error) {
      console.log(error);
    }
    try {
      setLoading2(true);
      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/BlogBest`);
      const filteredBookerPick = response.data.item.filter((item: BooksInfoTypes) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.author.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.publisher.toLowerCase().includes(keyword?.toLowerCase() as string)
        );
      });
      setBookerPick(filteredBookerPick);
      setLoading2(false);
    } catch (error) {
      console.log(error);
    }
    try {
      setLoading3(true);
      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/special`);
      const filteredBookSpecial = response.data.item.filter((item: BooksInfoTypes) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.author.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.publisher.toLowerCase().includes(keyword?.toLowerCase() as string)
        );
      });
      setBookSpecial(filteredBookSpecial);
      setLoading3(false);
    } catch (error) {
      console.log(error);
    }
    try {
      setLoading4(true);
      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/newbooks`);
      const filteredNewBooks = response.data.item.filter((item: BooksInfoTypes) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.author.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.publisher.toLowerCase().includes(keyword?.toLowerCase() as string)
        );
      });
      setNewBook(filteredNewBooks);
      setLoading4(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const products = await getProductListHandler();
      const filteredProducts = products.filter((item) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase()) ||
          item.content.toLowerCase().includes(keyword?.toLowerCase())
        );
      });
      setMarketList(filteredProducts.sort((a, b) => b.id - a.id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (keyword !== '') {
      getPost();
      getBook();
      getProduct();
    } else return;
  }, [keyword]);
  return (
    <St.Container>
      <St.SearchResult>'{keyword}'에 대한 검색 결과입니다.</St.SearchResult>
      <St.SearchWrapper height={20}>
        <St.SearchTitle>북커톡</St.SearchTitle>
        {bookertalkList.length > 0 ? (
          <>
            {bookertalkList.slice((currentPostsPage - 1) * 5, currentPostsPage * 5).map((item, i) => {
              return (
                <St.PostListBox>
                  <St.PostList key={i} onClick={() => navigate(`/detail/${item.id}`)}>
                    <St.Post width={13}>{item.title}</St.Post>
                    <St.Post width={50}>{item.content}</St.Post>
                    <St.Post width={15}>
                      {item.users.nickname} | {formatCreatedAt(item.created_at)}
                    </St.Post>
                  </St.PostList>
                </St.PostListBox>
              );
            })}
          </>
        ) : (
          <St.SearchNoData>검색 결과가 없습니다.</St.SearchNoData>
        )}
        {/* 한 페이지에 보여줄 페이지 갯수 조정하기 → posstsPerPage의 숫자를 바꿔보세요! */}
        <Pagination postsPerPage={5} totalPosts={bookertalkList?.length ?? 0} paginate={setCurrentPostsPage} />
      </St.SearchWrapper>
      <St.SearchBookWrapper>
        <St.SearchTitle>도서 소개</St.SearchTitle>
        {bestSellerList.length > 0 ? (
          <>
            <St.BookListCategory>베스트 셀러</St.BookListCategory>
            {loading1 ? <Loading /> : null}
            <St.BookList>
              {bestSellerList.map((item, i) => {
                return (
                  <St.Book
                    key={i}
                    onClick={() => {
                      navigate(`/aboutBook/${item.isbn}`);
                    }}>
                    <St.BookImg>
                      <img src={item.cover} loading="lazy" alt="bookimg" />
                    </St.BookImg>
                    <St.BookAuthor>{item.author}</St.BookAuthor>
                    <St.BookAuthor>{item.publisher}</St.BookAuthor>
                  </St.Book>
                );
              })}
            </St.BookList>
          </>
        ) : (
          <St.SearchNoData>검색 결과가 없습니다.</St.SearchNoData>
        )}
        {newBook.length > 0 ? (
          <>
            <St.BookListCategory>신간도서</St.BookListCategory>
            {loading2 ? <Loading /> : null}
            <St.BookList>
              {newBook.map((item, i) => {
                return (
                  <St.Book
                    key={i}
                    onClick={() => {
                      navigate(`/aboutBook/${item.isbn13}`);
                    }}>
                    <St.BookImg>
                      <img src={item.cover} loading="lazy" alt="bookimg" />
                    </St.BookImg>
                    <St.BookAuthor>{item.author}</St.BookAuthor>
                    <St.BookAuthor>{item.publisher}</St.BookAuthor>
                  </St.Book>
                );
              })}
            </St.BookList>
          </>
        ) : (
          <></>
        )}
        {bookSpecial.length > 0 ? (
          <>
            <St.BookListCategory>스페셜</St.BookListCategory>
            {loading3 ? <Loading /> : null}
            <St.BookList>
              {bookSpecial.map((item, i) => {
                return (
                  <St.Book
                    key={i}
                    onClick={() => {
                      navigate(`/aboutBook/${item.isbn13}`);
                    }}>
                    <St.BookImg>
                      <img src={item.cover} alt="bookimg" loading="lazy" />
                    </St.BookImg>
                    <St.BookAuthor>{item.author}</St.BookAuthor>
                    <St.BookAuthor>{item.publisher}</St.BookAuthor>
                  </St.Book>
                );
              })}
            </St.BookList>
          </>
        ) : (
          <></>
        )}
        {bookerPick.length > 0 ? (
          <>
            <St.BookListCategory>북커픽</St.BookListCategory>
            {loading4 ? <Loading /> : null}
            <St.BookList>
              {bookerPick.map((item, i) => {
                return (
                  <St.Book
                    key={i}
                    onClick={() => {
                      navigate(`/aboutBook/${item.isbn13}`);
                    }}>
                    <St.BookImg>
                      <img src={item.cover} alt="bookimg" loading="lazy" />
                    </St.BookImg>
                    <St.BookAuthor>{item.author}</St.BookAuthor>
                    <St.BookAuthor>{item.publisher}</St.BookAuthor>
                  </St.Book>
                );
              })}
            </St.BookList>
          </>
        ) : (
          <></>
        )}
      </St.SearchBookWrapper>
      <St.SearchWrapper height={30}>
        <St.SearchTitle>중고거래</St.SearchTitle>
        {marketList.length > 0 ? (
          <St.ProductList>
            {marketList.map((item, i) => {
              return (
                <St.Product key={i} onClick={() => navigate(`/product/${item.id}`)}>
                  {item.product_img && item.product_img.length === 0 ? (
                    <St.LogoImg />
                  ) : (
                    <St.ProductImg>
                      <img
                        src={(item.product_img && item.product_img[0]) ?? undefined}
                        alt="검색결과상품이미지"
                        loading="lazy"
                      />
                    </St.ProductImg>
                  )}
                  <St.TitleAndPriceBox>
                    <St.ProductTitle>{item.title}</St.ProductTitle>
                    <St.ProductPrice>{item.price} 원</St.ProductPrice>
                  </St.TitleAndPriceBox>
                </St.Product>
              );
            })}
          </St.ProductList>
        ) : (
          <St.SearchNoData>검색 결과가 없습니다.</St.SearchNoData>
        )}
      </St.SearchWrapper>
    </St.Container>
  );
};

export default SearchField;

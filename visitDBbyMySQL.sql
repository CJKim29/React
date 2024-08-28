/*
	-- 방명록 테이블
	create table visit
	(
		idx		int primary key auto_increment,		-- 일련번호
		name	varchar(100)  not null,				-- 작성자
		content	text not null,						-- 내용
		pwd		varchar(100)  not null,				-- 비밀번호
		ip		varchar(100)  not null,				-- 아이피
		regdate	datetime							-- 작성일자	
	);
		
	-- sample date
	insert into visit values(null, '일길동', '내가 1등이다', '1234', '192.168.219.170', now());
	insert into visit values(null, '이길동', '나는 2등이네', '1234', '192.168.219.170', now());
	insert into visit values(seq_visit_idx.nextVal, '화니', '형 사실 저 디아블로 깔았어요', 'dialove', '192.168.219.119', sysdate);
	insert into visit values(seq_visit_idx.nextVal, '화니', '형 그걸 말씀하시면 어떡해요ㅠ 선일이형 몰래 하려고 했는데ㅠ', 'dialove', '192.168.219.119', sysdate);
	insert into visit values(seq_visit_idx.nextVal, '화니', '우리 둘만의 비밀', 'dialove', '192.168.219.119', sysdate);
	insert into visit values(seq_visit_idx.nextVal, '배현진', '형 미워요', 'mrbae', '192.168.219.61', sysdate);
	insert into visit values(seq_visit_idx.nextVal, '김예송', '짜증나 진짜', 'ys', '192.168.219.77', sysdate);
	
	-- JDBC용 insert문
	insert into visit values(seq_visit_idx.nextVal, ?, ?, ?, ?, sysdate)
	
	--view로 생성
	create or replace view visit_view
	as
		select
			rank() over(order by idx desc) as no, v.*
		from
			(select * from visit order by idx desc) v
            
	select * from visit_view

	-- 수정
	update visit set name='원길동', content='내가 일등이다', pwd='1234', ip='192.168.219.170', regdate=sysdate where idx=21
	
*/